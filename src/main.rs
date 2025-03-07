use yew::prelude::*;

#[function_component(MapComponent)]
fn map_component() -> Html {
    html! {
        <div class="container">
            <h1>{ "Map of Azeroth" }</h1>
            <img src="/assets/azeroth.jpg" alt="Azeroth map" class="map-image" />
        </div>
    }
}

fn main() {
    yew::Renderer::<MapComponent>::new().render();
}