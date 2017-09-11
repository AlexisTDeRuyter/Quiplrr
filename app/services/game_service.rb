class GameService
  SHAKESPLRR = Rails.root.join('app', 'data', 'dictionaries', 'shakesplrr')
  TRUMPLRR = Rails.root.join('app', 'data', 'dictionaries', 'trumplrr')
  DONALD_SHAKESPLRR = Rails.root.join('app', 'data', 'dictionaries', 'donald_shakesplrr')

  def generate_sentence(person, n = 1)
    case person
    when 'shakesplrr' then SHAKESPLRR.generate_n_sentences(n)
    when 'trumplrr' then TRUMPLRR.generate_n_sentences(n)
    when 'donald_shakesplrr' then DONALD_SHAKESPLRR.generate_n_sentences(n)
    end
  end

  def generate_fake_sentence(person, n = 1)
    case person
    when 'shakesplrr' then GameGenerator.new(SHAKESPLRR).load_fake_sentence
    when 'trumplrr' then GameGenerator.new(TRUMPLRR).load_fake_sentence
    when 'donald_shakesplrr' then GameGenerator.new(DONALD_SHAKESPLRR).load_fake_sentence
    end
  end
end

class RealSentence
  def initialize(path)
    @file = File.read(path)
    @sentences = @file.split(".")
    @length = @sentences.length
  end

  # def print_all
  #   puts @file
  # end

  def choose_sentence
    random_index = Random.new_seed % @length
    returning_sentence = @sentences[random_index].lstrip + "."

    if !( returning_sentence.length > 10 && returning_sentence.length < 20 )
      returning_sentence
    else
      choose_sentence
    end
  end
end

require 'marky_markov'
class FakeSentence
  def initialize(path)
    @file = MarkyMarkov::Dictionary.new(path, 2)
  end

  def choose_sentence
    returning_sentence = @file.generate_1_sentences
    if !( returning_sentence.length > 10 && returning_sentence.length < 20 )
      returning_sentence
    else
      choose_sentence
    end
  end

end