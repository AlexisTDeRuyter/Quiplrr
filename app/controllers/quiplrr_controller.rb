require "#{Rails.root}/app/services/sentence_service"
require "#{Rails.root}/app/services/tweet_service"
require "#{Rails.root}/app/services/tweet_parsing_service"
require "#{Rails.root}/app/services/twitter_dictionary_service"

class QuiplrrController < ApplicationController
  def index
    @quote = Quote.new
  end

  def generate
    handle = params[:handle]
    if handle
      service = TweetService.new
      if service.user_exists?(handle)
        tweets = service.get_tweets(handle)
        text = TweetParsingService.new(tweets).tweets
        tweet_dictionary = TwitterDictionaryService.new
        tweet_dictionary.populate(text)
        @quote = Quote.create(quote: tweet_dictionary.generate_n_sentences(1), source: "#{handle}lrr")
      end
    else
      quiplrr = SentenceService.new
      source = params[:source] == 'donald_shakesplrr' ? 'Donald Shakesplrr' : params[:source].capitalize
      quote = quiplrr.generate_sentence(params[:source])
      @quote = Quote.create(quote: quote, source: source)
    end
    respond_to do |format|
      if @quote
        format.json { render json: {quote: @quote.quote, source: @quote.source, url: @quote.url} }
      else
        format.json { render json: {error: 'User account either does not exist or is set to private.'}, status: 422 }
      end
    end
  end

  def show
    @quote = Quote.find_by(url: params[:url])
  end
end
