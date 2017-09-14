class Player < ApplicationRecord
  belongs_to :group_game
  scope :rank, -> { order(result: :desc).pluck(:username, :result) }
  # def join_game(token)
  #   self.game = GroupGame.find_by(token: token)
  # end
end
