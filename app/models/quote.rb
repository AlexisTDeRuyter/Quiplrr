class Quote < ApplicationRecord
  before_save :generate_short_url

  private

  def generate_short_url
    url = SecureRandom.urlsafe_base64(6)
    while Quote.find_by(url: url)
      url = SecureRandom.urlsafe_base64(6)
    end
    self.url = url
  end
end
