class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render 'api/user/show'
    else
      # flash[:errors] = @user.errors.full_messages
      render json: ["You fucked up"], status: 412
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["Nobody Logged in"], status: 404
    end
  end

end
