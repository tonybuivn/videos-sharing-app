# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # resource :users, only: :create
      post '/signup', to: 'users#create'
      post '/login', to: 'auth#login'
      get '/auto_login', to: 'auth#auto_login'
    end
  end
end
