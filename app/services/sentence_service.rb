class SentenceService
  SHAKESPLRR = MarkyMarkov::Dictionary.new(Rails.root.join('app', 'data', 'dictionaries', 'shakesplrr'), 2)
  TRUMPLRR = MarkyMarkov::Dictionary.new(Rails.root.join('app', 'data', 'dictionaries', 'trumplrr'), 2)

  def generate_sentence(person, n = 1)
    case person
    when 'shakesplrr' then SHAKESPLRR.generate_n_sentences(n)
    when 'trumplrr' then TRUMPLRR.generate_n_sentences(n)
    end
  end
end
