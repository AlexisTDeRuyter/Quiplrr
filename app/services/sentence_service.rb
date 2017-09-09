class SentenceService
  SHAKESPEARE = MarkyMarkov::Dictionary.new(Rails.root.join('app', 'data', 'dictionaries', 'shakespeare'), 2)
  TRUMP = MarkyMarkov::Dictionary.new(Rails.root.join('app', 'data', 'dictionaries', 'trump'), 2)

  def generate_sentence(person, n = 1)
    case person
    when 'shakespeare' then SHAKESPEARE.generate_n_sentences(n)
    when 'trump' then TRUMP.generate_n_sentences(n)
    end
  end
end
