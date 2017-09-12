require 'twitter'

class TweetService
  def initialize
    connect
  end

  def post_tweet(content)
    @client.update(content)
  end

  def get_tweets(handle)
    tweets = []
    tweets += @client.user_timeline(handle, count: 200, include_rts: false)
    max = tweets.last[:id]
    tweets += @client.user_timeline(handle, count: 200, include_rts: false, max_id: max)
    tweets
  end

  def user_exists?(handle)
    return false if handle.length == 0
    self.get_tweets(handle)
    true
    rescue Twitter::Error
      false
  end

  private

  def connect
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["CONSUMER_KEY"]
      config.consumer_secret     = ENV["CONSUMER_SECRET"]
      config.access_token        = ENV["ACCESS_TOKEN"]
      config.access_token_secret = ENV["ACCESS_TOKEN_SECRET"]
    end
  end
end
