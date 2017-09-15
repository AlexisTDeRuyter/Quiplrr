require "#{Rails.root}/app/services/game_service"

class GroupGame < ApplicationRecord
  has_many :players, dependent: :destroy
  has_many :questions
  before_save :generate_token

  def generate_questions(source)
    game_service = GameService.new
    1.times do
      Question.create(
        quote: game_service.generate_game_sentence(source),
        is_real: game_service.is_real_sentence,
        group_game: self)
    end
  end

  private

  def generate_token
    token = SecureRandom.urlsafe_base64(3)
    while GroupGame.find_by(token: token)
      token = SecureRandom.urlsafe_base64(3)
    end
    self.token = token
  end
end
