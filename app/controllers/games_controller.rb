require "#{Rails.root}/app/services/game_service"
require "#{Rails.root}/app/services/sentence_service"


class GamesController < ApplicationController
  def index
    @quote = Quote.new
  end

  def generate
    puts params
    quiplrr = GameService.new
    source = params[:source] == 'donald_shakesplrr' ? 'Donald Shakesplrr' : params[:source].capitalize
    quote = quiplrr.generate_game_sentence(params[:source])
    is_real_sentence = quiplrr.is_real_sentence
    @quote = Quote.create(quote: quote, source: source)
    respond_to do |format|
      format.json { render json: {quote: @quote.quote, source: @quote.source, is_real_sentence: is_real_sentence, url: @quote.url} }
    end
  end

  def show
    @quote = Quote.find_by(url: params[:url])
  end
end
