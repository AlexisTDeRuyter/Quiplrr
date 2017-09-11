class TweetParsingService
  attr_reader :tweets
  def initialize(tweets)
    @handle = tweets.first['user']['screen_name']
    @tweets = filter_tweets(tweets)
  end

  def filter_tweets(tweets)
    return nil if tweets.length < 50
    clean_tweets = []
    tweets.each do |tweet|
      unless tweet.full_text.match(/https?:\/\/[\S]+/)
      	clean_tweets << tweet.full_text.gsub(/#\S+/, '').gsub(/@\S+/, '').gsub(/\.\.\./, '').gsub(/&amp/,'&')
  		end
    end
    return nil if clean_tweets.length < 50
    clean_tweets.reverse.join(' ')
  end
end
