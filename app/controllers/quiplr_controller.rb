require "#{Rails.root}/app/services/sentence_service"


class QuiplrController < ApplicationController
  def index
    @quote = Quote.new
  end

  def generate
    quiplr = SentenceService.new
    @quote = Quote.create(quote: quiplr.generate_sentence(params[:source]), source: params[:source].capitalize)
    respond_to do |format|
      format.html { render json: {quote: @quote.quote, source: @quote.source, url: @quote.url}.to_json }
      format.js { render json: {quote: @quote.quote, source: @quote.source, url: @quote.url}.to_json }
    end
  end

  def show
    @quote = Quote.find_by(url: params[:url])
  end
end
