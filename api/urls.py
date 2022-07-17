from django.urls import path
from . import views


urlpatterns = [
    path('',views.coba_route,name='routes'),
    path("catatan/", views.ambil_catatan, name="catatan"),
    path("catatan/<str:pk>/", views.ambil_catatan_tunggal, name="catatan_tunggal")
]
