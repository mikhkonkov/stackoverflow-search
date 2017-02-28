Rails.application.routes.draw do

  scope module: :web do
    namespace :stackoverflow do
      resources :search, only: :index
    end
  end

  namespace :api do
    namespace :v1 do
      namespace :stackoverflow do
        resources :search, only: :index
      end
    end
  end

end
