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
    game = GroupGame.find_by(token: params[:room])
    return unless game
    questions = game.questions
    first_player = game.players.order(:username).first
    if player == first_player.username && questions.any?
      @question = questions.first
      ActionCable.server.broadcast("group_game_#{params[:room]}", {question: @question.quote, is_real: @question.is_real.to_s})
      @question.destroy
    end
  end
end
