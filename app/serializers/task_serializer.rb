class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at
  has_many :comments, embed: :ids
end