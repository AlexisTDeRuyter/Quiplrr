class TweetParsingService
  attr_reader :tweets
  def initialize(tweets)
    @handle = tweets.first['user']['screen_name']
    @tweets = filter_tweets(tweets)
  end

  def filter_tweets(tweets)
    clean_tweets = []
    tweets.each do |tweet|
      clean_tweets << tweet.full_text.gsub(/#\S+/, '').gsub(/@\S+/, '').gsub(/\.\.\./, '').gsub(/&amp/,'&').gsub(/https?:\/\/[\S]+/, ' ')
    end
    clean_tweets.reverse.join(' ')
  end
end
