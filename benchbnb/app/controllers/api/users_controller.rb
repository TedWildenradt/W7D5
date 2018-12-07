class Api::UsersController < ApplicationController

  def create
    # debugger
    @user = User.new(user_params)
    if @user.save
      login(@user)
      redirect_to :root
    else
      render json: ['wrong'], status: 412
    end
  end

  def user_params
    params.require(:user).permit(:password,:username)
  end

end
