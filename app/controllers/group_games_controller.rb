class GroupGamesController < ApplicationController
  def create
    @game = GroupGame.create(source: 'trumplrr')
    @player = Player.create(username: params[:player_name], group_game: @game, group_game_token: @game.token)
    ActionCable.server.broadcast \
      "group_game_#{params[:token]}", { token: @game.token, players: @game.players.pluck(:username) }
    render json: {token: @game.token, player_name: @player.username}
  end
end
