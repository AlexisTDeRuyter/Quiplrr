Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get '/quiplrr', to: 'quiplrr#generate'

get '/quiplrr/:url', to: 'quiplrr#show'

root 'quiplrr#index'


end
