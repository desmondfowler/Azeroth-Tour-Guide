from app import create_app

# The most simple test that ever did test
def test_app_exists():
    app = create_app()
    assert app is not None