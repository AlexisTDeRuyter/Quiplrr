class TweetParsingService
  def initialize(tweets)
    @handle = tweets.first['user']['screen_name']
    @tweets = filter_tweets(tweets)
  end

  def filter_tweets(tweets)
    clean_tweets = []
    tweets.each do |tweet|
      unless tweet.full_text.match(/https?:\/\/[\S]+/)
      	clean_tweets << tweet.full_text.gsub(/#\S+/, '').gsub(/@\S+/, '').gsub(/\.\.\./, '')
  		end
    end
    clean_tweets.reverse.join(' ')
  end
end
