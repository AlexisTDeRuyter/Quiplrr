require 'marky_markov'

class TwitterDictionaryService
  def initialize
    #(handle)
    # path = "../data/dictionaries/#{handle}"
    @dictionary = MarkyMarkov::TemporaryDictionary.new
  end

  def populate(text)
    @dictionary.parse_string(text)
  end

  def generate_n_sentences(n)
    @dictionary.generate_n_sentences(n)
  end
end
