require "#{Rails.root}/app/services/sentence_service"


class QuiplrController < ApplicationController
  def index
    @quote = Quote.new
  end

  def generate
    quiplr = SentenceService.new #'app', 'data', 'dictionaries', params[:person]), 3)
    # sentence = quiplr.generate_sentence('shakespeare')
    @quote = Quote.create(quote: quiplr.generate_sentence('shakespeare'), source: 'shakespeare'.capitalize)
    respond_to do |format|
      format.html { render json: {quote: @quote.quote, source: @quote.source, url: @quote.url}.to_json }
      format.js { render json: {quote: @quote.quote, source: @quote.source, url: @quote.url}.to_json }
    end
  end

  def show
    @quote = Quote.find_by(url: params[:url])
  end
end
