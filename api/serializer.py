from pyexpat import model
from rest_framework.serializers import ModelSerializer
from .models import Catatan

class SerializerCatatan(ModelSerializer):
    class Meta:
        model = Catatan
        fields = '__all__'
