desc "This task is called by the Heroku scheduler to post tweets"
task post_tweet: :evironment do
  quiplr = SentenceService.new
  tweet = quiplr.generate_sentence('shakespeare')
  tweeter = TweetService.new
  tweeter.post_tweet(tweet)
end
