Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get '/quiplr', to: 'quiplr#generate'

get '/quiplr/:url', to: 'quiplr#show'

root 'quiplr#index'


end
