require 'marky_markov'
require "#{Rails.root}/app/services/_real_sentence_generator"
require "#{Rails.root}/app/services/_fake_sentence_generator"

class GameGenerator
  def initialize(path)
    @path = path
  end

  def load_real_sentence
    RealSentence.new(@path).choose_sentence
  end

  def load_fake_sentence
    FakeSentence.new(@path).choose_sentence
  end
end