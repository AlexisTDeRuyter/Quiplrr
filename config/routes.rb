Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get '/quiplrr', to: 'quiplrr#generate'

get '/quiplrr/:url', to: 'quiplrr#show'

root 'quiplrr#index'

match "*path", :to => proc {|env| [200, {
'Access-Control-Allow-Origin' => '*',
'Access-Control-Allow-Methods' => 'GET, POST, PUT, DELETE, OPTIONS',
'Access-Control-Allow-Credentials' => 'true',
'Access-Control-Request-Method' => '*',
'Access-Control-Allow-Headers' => 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
'Content-Type' => 'text/plain'

}, ["CORS Preflight"]] }, :via => [:options]

end
