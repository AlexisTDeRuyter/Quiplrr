class RealSentence
  def initialize(path)
    path = "#{path}.txt"
    @file = File.read(path)
    @sentences = @file.split(".")
    @length = @sentences.length
  end

  def choose_sentence
    random_index = Random.new_seed % @length
    returning_sentence = @sentences[random_index].lstrip + "."

    if returning_sentence.length > 10 && returning_sentence.length < 200
      returning_sentence
    else
      choose_sentence
    end
  end
end