require "#{Rails.root}/app/services/sentence_service"


class QuiplrController < ApplicationController
  def index
    @text = ''
  end

  def show
    quiplr = SentenceService.new #'app', 'data', 'dictionaries', params[:person]), 3)
    sentence = quiplr.generate_sentence('shakespeare')
    respond_to do |format|
      format.html { render json: sentence.to_json }
      format.js { render json: sentence.to_json }
    end
  end
end
