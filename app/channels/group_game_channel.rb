class GroupGameChannel < ApplicationCable::Channel
  periodically :send_questions, every: 10.seconds

  def subscribed
    stream_from "group_game_#{params[:room]}"
  end

  def receive(data)
    puts 'data received'
    puts '*' * 500
    puts data
    if data['start']
      puts 'in if statement'
      @game = GroupGame.find_by(token: params[:room])
      @game.generate_questions('trumplrr')
      ActionCable.server.broadcast("group_game_#{params[:room]}", data)
    elsif data['results']
      @player = Player.find_by(username: data['playerName'])

      @player.result = data['results']
      @player.save!
      sleep(0.2)
      ActionCable.server.broadcast("group_game_#{params[:room]}", rank: @game.players.rank)
    end
  end

  def send_questions
    @game = GroupGame.find_by(token: params[:room])
    if @game.questions.any?
      @question = @game.questions.first
      ActionCable.server.broadcast("group_game_#{params[:room]}", {question: @question.quote, is_real: @question.is_real.to_s})
      @question.destroy
    end
  end
end


# Somewhere in your app this is called, perhaps from a NewCommentJob
# ActionCable.server.broadcast \
#   "group_game_#{params[:id]}", { title: 'New things!', body: 'All the news that is fit to print' }
