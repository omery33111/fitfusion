from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, BasePermission
from rest_framework import status

from callback.models import Callback
from callback.serializers import CallbackSerializer



class IsStaff(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_staff
    


# -------------------- CALLBACKS CONTROL START -------------------- #

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsStaff])
def get_callback(request):
    if request.method == 'GET':
        callbacks = Callback.objects.all()
        serializer = CallbackSerializer(callbacks, many=True)
        return Response(serializer.data)


@permission_classes([IsAuthenticated, IsStaff])
@api_view(["DELETE"])
def delete_callback(request, pk = -1):
    if request.method == "DELETE":
        try:
            callback = Callback.objects.get(pk = pk)
            callback.delete()
            return Response(status = status.HTTP_204_NO_CONTENT)
        except Callback.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

# -------------------- CALLBACKS CONTROL END -------------------- #
    