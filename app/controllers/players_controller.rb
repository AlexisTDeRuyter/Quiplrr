class PlayersController < ApplicationController
  def create
    @game = GroupGame.find_by(token: params[:token])
    @player = Player.create(username: params[:player_name], group_game: @game, group_game_token: params[:token])
    render json: {token: @game.token, player_name: @player.username}
  end
end
