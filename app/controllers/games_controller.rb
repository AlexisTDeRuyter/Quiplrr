require "#{Rails.root}/app/services/game_service"


class GamesController < ApplicationController
  def index
    @quote = Quote.new
  end

  def generate
    quiplrr = GameService.new
    source = params[:source] == 'donald_shakesplrr' ? 'Donald Shakesplrr' : params[:source].capitalize

    real_quote = quiplrr.generate_real_sentence(params[:source])
    fake_quote = quiplrr.generate_fake_sentence(params[:source])

    @quote = Quote.create(fake_quote: fake_quote, real_quote: real_quote, source: source)

    respond_to do |format|
      format.html { render json: {fake_quote: @quote.fake_quote, real_quote: @quote.real_quote, source: @quote.source, url: @quote.url}.to_json }
      format.js { render json: {fake_quote: @quote.fake_quote, real_quote: @quote.real_quote, source: @quote.source, url: @quote.url}.to_json }
    end
  end

  def show
    @quote = Quote.find_by(url: params[:url])
  end
end
