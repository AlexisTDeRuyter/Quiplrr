class SentenceService
  def initialize(params)
    @generator = MarkyMarkov::Dictionary.new(Rails.root.join('app', 'data', 'dictionaries', params[:person]), 3)
  end

  def generate_sentence(n = 1)
    @generator.generate_n_sentences(n)
  end
end
