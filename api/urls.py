from django.urls import path
from . import views


urlpatterns = [
    path('',views.coba_route,name='routes')
]
