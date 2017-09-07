class SentenceService
  def initialize(params)
    @generator = MarkyMarkov::Dictionary.new(params[:person], 3)
  end

  def generate_sentence(n = 1)
    @generator.generate_n_sentences(n)
  end
end
