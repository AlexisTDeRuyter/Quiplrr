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