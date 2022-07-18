from django.urls import path
from . import views


urlpatterns = [
    path('',views.coba_route,name='routes'),
    path("catatan/", views.ambil_catatan, name="catatan"),
    path("catatan/buat/", views.buat_catatan, name="buat-catatan"),
    path("catatan/<str:pk>/perbaharui/", views.perbaharui_catatan, name="perbaharui-catatan"),
    path("catatan/<str:pk>/hapus/", views.hapus_catatan, name="hapus-catatan"),
    path("catatan/<str:pk>/", views.ambil_catatan_tunggal, name="catatan-tunggal"),

    

]
