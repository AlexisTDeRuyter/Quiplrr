class Game < ApplicationRecord
  has_secure_token
  has_many :players


end
