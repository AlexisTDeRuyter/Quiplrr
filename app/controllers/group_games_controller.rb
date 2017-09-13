class GroupGamesController < ApplicationController
  def create
    @game = GroupGame.create(source: 'trumplrr')
    @player = Player.create(username: params[:player_name], group_game: @game, group_game_token: @game.token)
    render json: {token: @game.token, player_name: @player.username}
  end
end
