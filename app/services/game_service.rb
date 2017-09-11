require "#{Rails.root}/app/services/_game_generator"

class GameService

  FAKE_SHAKESPLRR = GameGenerator.new(Rails.root.join('app', 'data', 'dictionaries', 'shakesplrr'))
  FAKE_TRUMPLRR = GameGenerator.new(Rails.root.join('app', 'data', 'dictionaries', 'trumplrr'))
  FAKE_DONALD_SHAKESPLRR = GameGenerator.new(Rails.root.join('app', 'data', 'dictionaries', 'donald_shakesplrr'))

  REAL_SHAKESPLRR = GameGenerator.new(Rails.root.join('app', 'data', 'seeds', 'sample'))
  REAL_TRUMPLRR = GameGenerator.new(Rails.root.join('app', 'data', 'seeds', 'sample'))
  REAL_DONALD_SHAKESPLRR = GameGenerator.new(Rails.root.join('app', 'data', 'seeds', 'sample'))

  def generate_real_sentence(person, n = 1)
    case person
    when 'shakesplrr' then (REAL_SHAKESPLRR).load_real_sentence
    when 'trumplrr' then (REAL_TRUMPLRR).load_real_sentence
    when 'donald_shakesplrr' then (REAL_DONALD_SHAKESPLRR).load_real_sentence
    end
  end

  def generate_fake_sentence(person, n = 1)
    case person
    when 'shakesplrr' then (FAKE_SHAKESPLRR).load_fake_sentence
    when 'trumplrr' then (FAKE_TRUMPLRR).load_fake_sentence
    when 'donald_shakesplrr' then (FAKE_DONALD_SHAKESPLRR).load_fake_sentence
    end
  end

  def generate_game_sentence(person, n = 1)
    if Random.new_seed % 2 == 0
      "#{generate_fake_sentence(person, n = 1)} + fake"
    else
      "#{generate_real_sentence(person, n = 1)} + real"
    end
  end
end



