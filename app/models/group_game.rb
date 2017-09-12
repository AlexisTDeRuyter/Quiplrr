class GroupGame < ApplicationRecord
  has_many :players
  has_many :questions
end
