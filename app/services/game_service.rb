require "#{Rails.root}/app/services/_game_generator"

class GameService
  attr_reader :is_real_sentence

  def initialize
    @is_real_sentence = nil
  end

  def generate_real_sentence(person, n = 1)
    case person
    when 'shakesplrr' then GameGenerator.new(Rails.root.join('app', 'data', 'real_dictionaries', 'shakesplrr')).load_real_sentence
    when 'trumplrr' then GameGenerator.new(Rails.root.join('app', 'data', 'real_dictionaries', 'trumplrr')).load_real_sentence
    end
  end

  def generate_fake_sentence(person, n = 1)
    case person
    when 'shakesplrr' then GameGenerator.new(Rails.root.join('app', 'data', 'dictionaries', 'shakesplrr')).load_fake_sentence
    when 'trumplrr' then GameGenerator.new(Rails.root.join('app', 'data', 'dictionaries', 'trumplrr')).load_fake_sentence
    end
  end

  def generate_game_sentence(person, n = 1)
    if Random.new_seed % 2 == 0
      @is_real_sentence = false
      generate_fake_sentence(person, n = 1)
      
    else
      @is_real_sentence = true
      generate_real_sentence(person, n = 1)
      
    end
  end
end



