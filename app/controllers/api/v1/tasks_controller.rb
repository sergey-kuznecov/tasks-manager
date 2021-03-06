class Api::V1::TasksController < ApplicationController
  inherit_resources

  respond_to :json

  def permitted_params
    params.permit(:id, task: [:title, :description])
  end
end