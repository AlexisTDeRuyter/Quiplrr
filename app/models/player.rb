class Player < ApplicationRecord
  belongs_to :group_game

  # def join_game(token)
  #   self.game = GroupGame.find_by(token: token)
  # end
end
