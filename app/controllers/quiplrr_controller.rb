require "#{Rails.root}/app/services/sentence_service"
require "#{Rails.root}/app/services/tweet_service"
require "#{Rails.root}/app/services/tweet_parsing_service"
require "#{Rails.root}/app/services/twitter_dictionary_service"

class QuiplrrController < ApplicationController
  def index
    @quote = Quote.new
  end

  def generate
    if params[:handle]
      # remember to handle error if there are an insufficient amount of tweets
      tweets = TweetService.new.get_tweets(params[:handle])
      text = TweetParsingService.new(tweets).tweets
      tweet_dictionary = TwitterDictionaryService.new
      tweet_dictionary.populate(text)
      @quote = Quote.create(quote: tweet_dictionary.generate_n_sentences(1), source: "#{params[:handle]}lrr")
    else
      quiplrr = SentenceService.new
      source = params[:source] == 'donald_shakesplrr' ? 'Donald Shakesplrr' : params[:source].capitalize
      quote = quiplrr.generate_sentence(params[:source])
      @quote = Quote.create(quote: quote, source: source)
    end
    respond_to do |format|
      format.json { render json: {quote: @quote.quote, source: @quote.source, url: @quote.url} }
    end
  end

  def show
    @quote = Quote.find_by(url: params[:url])
  end
end
