class PlayersController < ApplicationController
  def create
    @game = GroupGame.find_by(token: params[:token])
    @player = Player.create(username: params[:player_name], group_game: @game, group_game_token: params[:token])
    ActionCable.server.broadcast \
      "group_game_#{params[:token]}", { token: params[:token], players: @game.players.pluck(:username) }
    render json: {token: @game.token, player_name: @player.username, players: @game.players.pluck(:username) }
  end
end
