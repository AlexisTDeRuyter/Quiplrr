class GroupGameChannel < ApplicationCable::Channel
  periodically :send_questions, every: 15.seconds

  def subscribed
    stream_from "group_game_#{params[:room]}"
  end

  def receive(data)
    if data['start']
      @game = GroupGame.find_by(token: params[:room])
      @game.generate_questions('trumplrr')
      ActionCable.server.broadcast("group_game_#{params[:room]}", data)
    elsif data['results']
      @player = Player.find_by(username: data['playerName'])
      @player.result = data['results']
      @player.save!
      sleep(0.2)
      ActionCable.server.broadcast("group_game_#{params[:room]}", rank: @game.players.rank)
      @game.destroy
    end
  end

  def send_questions
    puts '*' * 500
    puts 'sending question'
    puts "current user #{player}"
    GroupGame.all.each do |game|
      if game.questions.any?
        @question = game.questions.first
        ActionCable.server.broadcast("group_game_#{game.token}", {question: @question.quote, is_real: @question.is_real.to_s})
        @question.destroy
      end
    end
  end
end
