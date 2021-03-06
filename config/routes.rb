Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/quiplrr', to: 'quiplrr#generate'


  get '/quiplrr/games', to: 'games#index'
  get '/quiplrr/games/generate', to: 'games#generate'

  get '/quiplrr/group', to: 'group_games#index'
  get '/quiplrr/:url', to: 'quiplrr#show'

  post '/quiplrr/group/create', to: 'group_games#create'
  post '/quiplrr/players/create', to: 'players#create'

  root 'quiplrr#index'
  get 'quiplrr/group/register', to: 'group_games#index'
  get 'quiplrr/group/join', to: 'group_games#index'
  get 'quiplrr/group/group_game', to: 'group_games#index'
  get 'quiplrr/group/results', to: 'group_games#index'
end
