class GroupGame < ApplicationRecord
  has_many :players
  has_many :questions
  before_save :generate_token

  private

  def generate_token
    token = SecureRandom.urlsafe_base64(6)
    while GroupGame.find_by(token: token)
      token = SecureRandom.urlsafe_base64(6)
    end
    self.token = token
  end
end
