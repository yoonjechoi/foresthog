# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView


class ImageView(APIView):
    def get(self, request, format=None):
        user = request.user

        image_list = []
        for following_user in user.following.all():
            user_images = following_user.images.all()[:2]
            for image in user_images:
                image_list.append(image)

        my_images = user.images.all()[:2]
        for image in my_images:
            image_list.append(image)

        sorted_list = sorted(image_list,
                             key=lambda image: image.created_at,
                             reverse=True)

        serializer = ImageSerializer(
            sorted_list,
            many=True,
            context={'request', request}
        )

        return Response(serializer.data)
